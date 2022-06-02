<template>
  <div class>
    <h5 class>Liste des artistes - Simple liste</h5>
  </div>
  <div v-for="artiste in listeArtistes" :key="artiste.id">
    <p>{{ artiste.nom }}</p>
  </div>
  <hr />
  <!--I-----------------------------------------------------------------------------I-->
  <div>
    <h5>Liste des pays - Liste synchronisée</h5>
  </div>
  <form class="mb-3">
    <h6>Nouveau pays</h6>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">Nom</span>
      </div>
      <input type="text" v-model="nom" class="form-control" required />
      <button class="btn btn-light" type="button" @click="createPays()" title="Création">
        <i class="fa fa-save fa-lg"></i>
      </button>
    </div>
  </form>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Nom</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="pays in listePaysSynchro" :key="pays.id">
        <td>{{ pays.id }}</td>
        <td>
          <input type="text" v-model="pays.nom" />
        </td>
        <td>
          <button class="btn light" @click.prevent="updatePays(pays)">
            <i class="fa fa-edit fa-lg"></i>
          </button>
          <button class="btn light" @click.prevent="deletePays(pays)">
            <i class="fa fa-trash fa-lg"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <hr />
  <!--I-----------------------------------------------------------------------------I-->
</template>


<script>
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

export default {
  data() {
    return {
      nom: null,
      message: null,
      listeArtistes: [],
    };
  },
  mounted() {
    this.getArtistes();
  },
  methods: {
    async getArtistes() {
      const firestore = getFirestore();
      const dbArtistes = collection(firestore, "artistes");
      const query = await getDocs(dbArtistes);
      query.forEach((doc) => {
        let artistes = {
          id: doc.id,
          nom: doc.data().nom,
        };
        this.listeArtistes.push(artistes);
      });
    },
  },
};
</script>

<style scoped>
.center {
  text-align: center;
}
.title {
  font-size: 1.4rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: #34495e;
}
h4 {
  font-weight: bold;
}
</style>
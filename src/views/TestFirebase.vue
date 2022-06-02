<template>
  <div class>
    <h5 class>Liste des artistes - Simple liste</h5>
  </div>
  <div v-for="artistes in listeartistes" :key="artistes.id">
    <p>{{ artistes.nom }}</p>
    <img :src="artistes.image" />
  </div>
  <hr />
  <!--I-----------------------------------------------------------------------------I
  
  I-----------------------------------------------------------------------------I-->
  <div>
    <h5>Liste des artistes - Liste synchronisée</h5>
  </div>
  <form class="mb-3">
    <h6>Nouveau artistes</h6>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">Nom</span>
      </div>
      <input type="text" v-model="nom" class="form-control" required />
      <button class="btn btn-light" type="button" @click="createartistes()" title="Création">
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
      <tr v-for="artistes in listeartistes" :key="artistes.id">
        <td>{{ artistes.id }}</td>
        <td>
          <input type="text" v-model="artistes.nom" />
        </td>
        <td>
          <button class="btn light" @click.prevent="updateartistes(artistes)">
            <i class="fa fa-edit fa-lg"></i>
          </button>
          <button class="btn light" @click.prevent="deleteartistes(artistes)">
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
import { getFirestore, collection, onSnapshot } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  data() {
    return {
      listeartistes: [],
      nom: null,
    };
  },
  mounted() {
    this.getartistes();
  },
  methods: {
    async getartistes() {
      const firestore = getFirestore();
      const dbartistes = collection(firestore, "artistes");
      const query = await onSnapshot(dbartistes, (snapshot) => {
        console.log("query", query);
        this.listeartistes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.listeartistes.forEach(function (personne) {
          const storage = getStorage();
          const spaceRef = ref(storage, "artistes/" + personne.image);
          getDownloadURL(spaceRef)
            .then((url) => {
              personne.image = url;
              console.log("personne", personne);
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
        console.log("listeartistes", this.listeartistes);
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
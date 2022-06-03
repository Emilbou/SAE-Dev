<template>
  <div class="m-auto mb-20 grid w-96 bg-black">
    <h1 class="my-4 text-center text-3xl text-white">Liste Artistes Synchro</h1>
    <form class="mb-10"></form>
    <input type="text" v-model="filter" class="mx-5 mt-2 border-2 p-3 text-black" placeholder="Filtre" />
    <button class="mx-5 mt-2 border-2 p-3 text-white" type="button" title="Filtrage">filtrage</button>
    <form class="w-full" v-for="artistes in filterByName" :key="artistes.id">
      <div>
        <input type="text" v-model="artistes.nom" required class="mx-5 mt-2 w-full border-2 p-3" />
        <button class="mx-5 mt-2 border-2 p-3 text-white" type="button" @click="updateArtistes(artistes)" title="Modification">
          Modifier
        </button>
        <button class="mx-5 border-2 p-3 text-white" type="button" @click="deleteArtistes(artistes)" title="Suppression">Supprimer</button>
      </div>
    </form>
  </div>
</template>

<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

export default {
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      message: null,
      nom: null,
      listeArtistesSynchro: [],
      filter: "",
    };
  },
  computed: {
    orderByName: function () {
      return this.listeArtistesSynchro.sort(function (a, b) {
        if (a.nom < b.nom) return -1;
        if (a.nom > b.nom) return 1;
        return 0;
      });
    },
    filterByName: function () {
      if (this.filter.length > 0) {
        let filter = this.filter.toLowerCase();
        return this.orderByName.filter(function (artistes) {
          return artistes.nom.toLowerCase().includes(filter);
        });
      } else {
        return this.orderByName;
      }
    },
  },

  mounted() {
    let user = getAuth().currentUser;
    if (user) {
      this.user = user;
      this.message = "User déjà connecté : " + this.user.email;
    } else {
      this.message = "User non connecté : " + this.user.email;
    }

    this.getArtistesSynchro();
  },

  methods: {
    async getArtistesSynchro() {
      const firestore = getFirestore();
      const dbArtistes = collection(firestore, "artistes");
      const query = await onSnapshot(dbArtistes, (snapshot) => {
        this.listeArtistesSynchro = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      });
    },

    async createArtistes() {
      const firestore = getFirestore();
      const dbArtistes = collection(firestore, "artistes");
      const docRef = await addDoc(dbArtistes, {
        nom: this.nom,
      });
      //console.log('document créé avec le id : ', docRef.id);
    },

    async updateArtistes(artistes) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "artistes", artistes.id);
      await updateDoc(docRef, {
        nom: artistes.nom,
      });
    },

    async deleteArtistes(artistes) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "artistes", artistes.id);
      await deleteDoc(docRef);
    },
  },
};
</script>
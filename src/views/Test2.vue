<template>
  <form enctype="multipart/form-data" @submit.prevent="createArtistes">
    <h5 class="my-5 text-center font-roboto text-4xl text-black">Création artiste</h5>
    <div>
      <img class="preview img-fluid" :src="imageData" />
    </div>

    <input class="mx-10 mb-10 border-2" placeholder="Nom" v-model="artistes.nom" required />
    <div></div>
    <input class="mx-10 mb-10 border-2" v-model="artistes.type" placeholder="Genre" key="required" />
    <div>
      <div>
        <span class="mx-10 font-roboto text-2xl text-black">Photo</span>
      </div>
      <div class="custom-file">
        <input type="file" class="custom-file-input mx-10" ref="file" id="file" @change="previewImage" />
        <label class="custom-file-label" for="file">Sélectionner l'image</label>
      </div>
    </div>

    <div>
      <div>
        <span class="mx-10 font-roboto text-2xl text-black">Date naissance</span>
      </div>
      <input class="mx-10" type="date" v-model="artistes.naissance" format="dd/mm/yyyy" required />
    </div>

    <div>
      <button class="m-10 border-4 border-black p-3 font-roboto text-2xl text-black" type="submit">Créer</button>
      <button>
        <router-link class="m-10 border-4 border-black p-3 font-roboto text-2xl text-black" to="/create">Annuler</router-link>
      </button>
    </div>
  </form>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  doc, // Obtenir un document par son id
  getDocs, // Obtenir la liste des documents d'une collection
  addDoc, // Ajouter un document à une collection
  updateDoc, // Mettre à jour un document dans une collection
  deleteDoc, // Supprimer un document d'une collection
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Cloud Storage : import des fonctions
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  name: "CreateView",
  data() {
    return {
      imageData: null, //image de l'artiste
      artistes: {
        // L'artiste à créer
        nom: null, // son nom
        type: null, // son prénom
        image: null, // sa photo (nom du fichier)
        naissance: null, // sa date de naissance
      },
    };
  },
  mounted() {
    // Montage de la vue
    // Appel de la liste des pays
    this.getArtiste();
  },
  methods: {
    async getArtiste() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbArtistes = collection(firestore, "artistes");
      // Liste des Artistess triés
      // query permet de faire une requête sur Firebase
      // notement pour filtrer, trier ... des données
      //orderBy permet de préciser sur quel élément trier, et dans quel ordre
      // ici le nom du pays par ordre croissant (asc)
      const q = query(dbArtistes, orderBy("nom", "asc"));
      // Récupération de la liste des pays à partir de la query
      // La liste est synchronisée
      await onSnapshot(q, (snapshot) => {
        this.listeArtistes = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      });
    },

    previewImage: function (event) {
      // Mise à jour de la photo du Artistes
      this.file = this.$refs.file.files[0];
      // Récupérer le nom du fichier pour la photo du Artistes
      this.artistes.image = this.file.name;
      // Reference to the DOM input element
      // Reference du fichier à prévisualiser
      var input = event.target;
      // On s'assure que l'on a au moins un fichier à lire
      if (input.files && input.files[0]) {
        // Creation d'un filereader
        // Pour lire l'image et la convertir en base 64
        var reader = new FileReader();
        // fonction callback appellée lors que le fichier a été chargé
        reader.onload = (e) => {
          // Read image as base64 and set to imageData
          // lecture du fichier pour mettre à jour
          // la prévisualisation
          this.imageData = e.target.result;
        };
        // Demarrage du reader pour la transformer en data URL (format base 64)
        reader.readAsDataURL(input.files[0]);
      }
    },

    async createArtistes() {
      // Obtenir storage Firebase
      const storage = getStorage();
      // Référence de l'image à uploader
      const refStorage = ref(storage, "artistes/" + this.artistes.photo);
      // Upload de l'image sur le Cloud Storage
      await uploadString(refStorage, this.imageData, "data_url").then((snapshot) => {
        console.log("Uploaded a base64 string");

        // Création du Artistes sur le Firestore
        const db = getFirestore();
        const docRef = addDoc(collection(db, "artistes"), this.artistes);
      });
      // redirection sur la liste des Artistes
      this.$router.push("/Accueil");
    },
  },
};
</script>


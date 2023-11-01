import mysql from "mysql";



// Créez la connexion en utilisant les variables d'environnement
export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"jebossela",
  database:"social"
});

// Établissez la connexion à la base de données
db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
  } else {
    console.log('Connexion à la base de données établie');
  }
});



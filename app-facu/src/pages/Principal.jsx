import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export default function Principal() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {

        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log("Nenhum dado encontrado no Firestore!");
        }
      } else {

        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleSair = async () => {
    await signOut(auth);
    navigate("/login");
  };

  if (!userData) return <p style={{ textAlign: "center", marginTop: "50px" }}>Carregando dados...</p>;

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>Página Principal</h2>
      <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px" }}>
        <p><strong>Nome:</strong> {userData.nome}</p>
        <p><strong>Sobrenome:</strong> {userData.sobrenome}</p>
        <p><strong>Data de Nascimento:</strong> {userData.dataNascimento}</p>
      </div>
      <button onClick={handleSair} style={{ marginTop: "20px", backgroundColor: "#ff4d4d", color: "white" }}>
        Sair
      </button>
    </div>
  );
}
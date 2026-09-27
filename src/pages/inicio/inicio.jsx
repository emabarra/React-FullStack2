import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

function Inicio() {
    const navigate = useNavigate();

    function navegaConIdFruta(idFruta) {
        console.log("ID CAPTURADO: ", idFruta);
        navigate(`/nosotros/${idFruta}`);
    }

    function irANosotros() {
        console.log("22222");
        const idFruta = 50;
        navigate(`/nosotros/${idFruta}`);
    }

    const listaFrutas = [
        { "id": 1, "nombre": "Manzana" },
        { "id": 2, "nombre": "Pera" },
        { "id": 3, "nombre": "Naranja" },
    ];
    const elementosHtml = [];

    for (const i of listaFrutas) {
        elementosHtml.push(
            <Button key={i.id} variant="outline-success" className="me-2"
                onClick={() => navegaConIdFruta(i.id)}>
                {i.nombre}
            </Button>
        );
    }

    return (
        <div className="container py-5">
            <h1 className="display-5 fw-bold">Inicio</h1>
            <Button variant="primary" className="mb-4" onClick={irANosotros}>
                Ir a nosotros
            </Button>

            <Card className="mt-3" style={{ maxWidth: '22rem' }}>
                <Card.Body>
                    <Card.Title>Elige una fruta</Card.Title>
                    <div>{elementosHtml}</div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Inicio;
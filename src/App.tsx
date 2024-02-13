import Form from "./components/Form/Form";
import BoxAnimation from "./components/animation/BoxAnimation/BoxAnimation";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import "./App.css";
import ScrollColorChange from "./components/ScrollColorChange/ScrollColorChange";

const App = () => {
  const name = "hover Me"
  const nameArr = name.split("")
  
  return (
      <Container>
      {/* <Button border={true} className={"bg-green-500"}/> */}
      <Button  className={""}>new</Button>
      <BoxAnimation/>
      <div className="alphabetContainer">
        {
          nameArr.map((letter, index) => {
            return <span key={index} className="alphabet" style={{transitionDelay: `${index * 50}ms`}}>{letter}</span>
          })
        }
      </div>
      <Form/>
      <ScrollColorChange/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum similique accusantium repellat harum, iusto, ut quam, ducimus nesciunt eligendi cumque ea est? Obcaecati ut eligendi dicta harum atque sunt inventore excepturi, at molestiae quod fuga veritatis dolorum minima in totam laudantium voluptas nam! Distinctio suscipit sapiente doloremque laudantium tempora quas harum porro dolor hic? Pariatur magnam sunt id sapiente unde ut a officia vero, dicta beatae porro inventore recusandae blanditiis, facere soluta maiores repudiandae laborum sed ipsum expedita cumque. Sed, nisi. Reprehenderit excepturi aliquam eligendi harum enim in consequuntur ullam eum, ea debitis magni ipsam, eos minima id cum beatae. Non inventore eum consequuntur aliquid iure tempora, ullam quasi est beatae, esse pariatur perspiciatis atque, veritatis laborum iusto. Laudantium illo, laboriosam enim doloribus commodi accusantium dolore hic amet accusamus, harum adipisci officia minus distinctio praesentium iure explicabo porro voluptatibus. Ab ratione harum consequatur repellendus, itaque blanditiis magni esse? Adipisci fugit sapiente nobis dolor explicabo assumenda nesciunt ducimus, a reprehenderit perspiciatis ullam aspernatur accusantium minus inventore velit quidem fuga? Labore magnam ex esse, voluptatibus vero asperiores itaque suscipit soluta nisi aliquam et quas voluptates maxime eligendi tenetur repellat expedita eveniet temporibus libero assumenda. Eos suscipit natus officia saepe eligendi. Adipisci itaque nam quisquam dolore maiores accusamus. Cupiditate quas consequuntur eos aliquam sit. Iure debitis minima ab voluptatum tempore culpa vitae commodi, enim placeat facere perspiciatis ut nostrum laboriosam. Atque, accusamus impedit ut dolorem voluptatem iste eaque ullam vitae placeat temporibus deserunt ex inventore et facilis quisquam nisi perferendis molestias quasi sed enim dicta nulla soluta debitis beatae? Consectetur iste quae illo, dolor optio perferendis atque adipisci totam dolorum eius sequi rerum, blanditiis dolores asperiores numquam? Dolor porro eligendi assumenda dolorem consequuntur labore aperiam in excepturi minus, rerum magni perspiciatis vero illo asperiores ipsum officiis iure. Officiis delectus commodi, facere reprehenderit nesciunt perspiciatis voluptates nostrum at aspernatur aliquam? Quasi quas rem libero beatae! Eum quis inventore repudiandae velit assumenda, consequatur quam tenetur animi neque deleniti, repellendus impedit adipisci accusamus voluptates natus officiis sed modi eligendi praesentium distinctio placeat illo magnam ipsum rerum. Modi, autem quo. Unde repellat accusantium eos ipsam veniam minus tempora omnis harum id corrupti laborum fugit, reiciendis, praesentium magnam error. Aliquid aut eum alias laboriosam iusto fugit laudantium rem! Laborum quam vel qui libero, officia iste consequuntur fugit et sint itaque assumenda corrupti sunt quas minus est accusamus! Assumenda, autem dolor, qui, possimus totam earum in non voluptatem sed quo a sapiente cum illum nihil minus! Repellat delectus deleniti doloremque fuga fugit molestias obcaecati nesciunt possimus soluta? Reprehenderit qui maiores facilis necessitatibus praesentium, debitis cumque iusto dignissimos numquam ratione tempore porro quis esse facere aut, quo eos saepe exercitationem quae adipisci vel. Quia inventore vel, officiis nam nemo recusandae optio quas dolores maiores rerum sed magnam alias ullam consequatur perspiciatis obcaecati exercitationem tenetur ea natus, provident dignissimos pariatur. Accusamus minima quam cum praesentium obcaecati. Earum perspiciatis molestiae, provident dolore nobis aperiam minus culpa suscipit explicabo debitis unde praesentium sequi blanditiis et itaque rerum, ex magnam dolores sint velit id.</p>
      </Container>
  
  );
};

export default App;
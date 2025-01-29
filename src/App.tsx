import Layout from "./components/Layout";
import ImagesSection from "./components/sections/ImagesSection";
import ClassesSection from "./components/sections/ClassesSection";
import AddImagesSection from "./components/sections/AddImagesSection";
import AddNewClassSection from "./components/sections/AddNewClassForm";
import CreateAnnotationSection from "./components/sections/CreateAnnotationSection";
import SavedAnnotationsSection from "./components/sections/SavedAnnotationsSection";
import ImagesUploadedInitialInfo from "./components/sections/ImagesUploadedInitialInfo";
import AddClassesInitialInfo from "./components/sections/AddClassesInitialInfo";

function App() {
     return (
          <Layout>
               <AddImagesSection />
               <ImagesUploadedInitialInfo />
               <AddClassesInitialInfo />
               <AddNewClassSection />
               <CreateAnnotationSection />
               <SavedAnnotationsSection />
               <ClassesSection />
               <ImagesSection />
          </Layout>
     );
}

export default App;


import FileUpload from '@/components/FileUpload';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            File Upload Component
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A modern file upload interface with drag & drop support, progress tracking, and multi-file handling.
          </p>
        </div>
        
        <FileUpload />
        
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Ready for Supabase storage integration
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;

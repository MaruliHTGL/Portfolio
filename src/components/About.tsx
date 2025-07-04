import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Users, ExternalLink } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Data Scientist passionate about machine learning, data analysis, and extracting valuable insights from complex datasets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 animate-slide-in-left">
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              I'm a third-year Informatics student at Sepuluh Nopember Institute of Technology 
              with a profound interest in data science. Through various projects involving 
              regression, classification, clustering, and NLP, I've developed strong analytical 
              skills and technical expertise.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              I graduated from the Data Science Bootcamp at Digital Skola with excellent grades 
              and have practical experience as a Junior Data Scientist intern at Deepublish, 
              where I worked on customer behavior analysis and predictive modeling.
            </p>

            {/* Statistics Cards moved here */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 animate-fade-in animate-delay-400">
              <Card className="text-center p-4 hover-lift">
                <CardContent className="p-0">
                  <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">7+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </CardContent>
              </Card>
              
              <Card className="text-center p-4 hover-lift">
                <CardContent className="p-0">
                  <Users className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">2+</div>
                  <div className="text-sm text-gray-600">Certifications</div>
                </CardContent>
              </Card>
              
              <Card className="text-center p-4 hover-lift">
                <CardContent className="p-0">
                  <GraduationCap className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">3.55</div>
                  <div className="text-sm text-gray-600">GPA</div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="space-y-8 animate-slide-in-right">
            {/* Education Section */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Education</h3>
              <div className="space-y-6">
                <Card className="p-6 hover-lift">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 rounded-full p-3">
                        <GraduationCap className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">
                          Student of Informatics
                        </h4>
                        <p className="text-blue-600 font-medium">
                          Sepuluh Nopember Institute of Technology
                        </p>
                        <p className="text-gray-600 text-sm">Surabaya, Indonesia</p>
                        <p className="text-gray-600 text-sm">Aug 2022 – Present</p>
                        <p className="text-gray-700 mt-2">GPA: 3.55/4.00</p>
                        <div className="mt-3">
                          <Badge variant="secondary" className="mr-2 mb-2">
                            Expert Staff GERIGI ITS
                          </Badge>
                          <Badge variant="secondary" className="mr-2 mb-2">
                            Employee Promotion Classification
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 hover-lift">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-100 rounded-full p-3">
                        <GraduationCap className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">
                          Mathematics and Natural Sciences
                        </h4>
                        <p className="text-green-600 font-medium">
                          Saint Thomas 1 Senior High School
                        </p>
                        <p className="text-gray-600 text-sm">Medan, Indonesia</p>
                        <p className="text-gray-600 text-sm">Jul 2019 – May 2022</p>
                        <p className="text-gray-700 mt-2">Score: 90.1/100</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-12 animate-fade-in animate-delay-200">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-4 hover-lift">
              <CardContent className="p-0">
                <div className="flex items-center justify-between flex-col space-y-3">
                  <div className="flex items-center gap-3 w-full">
                    <Award className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">Data Science</p>
                      <p className="text-gray-600 text-sm">Digital Skola</p>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="text-blue-600 border-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-blue-700 w-full"
                    asChild
                  >
                    <a 
                      href="https://r2.digitalskola.com/certificates/BC/XXX/003-BC-GRD-XXX43-II-2025.png" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View Credentials
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-4 hover-lift">
              <CardContent className="p-0">
                <div className="flex items-center justify-between flex-col space-y-3">
                  <div className="flex items-center gap-3 w-full">
                    <Award className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-900">Data Entry Specialist</p>
                      <p className="text-gray-600 text-sm">Digital Skola</p>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="text-blue-600 border-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-blue-700 w-full"
                    asChild
                  >
                    <a 
                      href="https://r2.digitalskola.com/certificates/SCr/DET/012-SCr-CPN-DET-V-2025.png" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View Credentials
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

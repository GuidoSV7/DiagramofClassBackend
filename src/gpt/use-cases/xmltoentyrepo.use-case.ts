import OpenAI from 'openai';

interface Options {
  prompt: string;
}


export const xmlToEntyRepoUseCase = async( openai: OpenAI,  options: Options ) => {

  const { prompt } = options;


  const completion = await openai.chat.completions.create({
    messages: [
      { 
        role: "system", 
        content: `
      Vas a recibir un archivo XML sobre unas clases de base de datos, tomarás en cuenta las relaciones y 
      las forma de relacionarlas como asociación, agregación y generalización para crear dos archivos por 
      cada tabla, el NAME.JAVA Y EL NAMAREPOSITORY.JAVA que funcionen usando SpringBoot JPA Data Rest ,Para los getters y los setters usá @Getter @Setter, separamelo por archivo,
      y mandame un json separando cada archivo con su nombre y contenido.
      si salen errores tipo Bad control character in string literal in JSON solucionalos,
      verificá que esté bien el json que me mandás, sin errores de 'json al inicio o al final.
        
         Ejemplo de salida:
        [
          {
            "name": "Job.java",
            "content": "import lombok.Getter;\nimport lombok.Setter;\nimport javax.persistence.Entity;\nimport javax.persistence.GeneratedValue;\nimport javax.persistence.GenerationType;\nimport javax.persistence.Id;\n\n@Entity\n@Getter\n@Setter\npublic class Job {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n    private String name;\n}",

          },
          {
            "name": "JobRepository.java",
            "content": "import org.springframework.data.jpa.repository.JpaRepository;\n\npublic interface JobRepository extends JpaRepository<Job, Long> {\n}",

          },
          {
            "name": "Person.java",
            "content": "import lombok.Getter;\nimport lombok.Setter;\nimport javax.persistence.Entity;\nimport javax.persistence.GeneratedValue;\nimport javax.persistence.GenerationType;\nimport javax.persistence.Id;\n\n@Entity\n@Getter\n@Setter\npublic class Person {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n    private String name;\n}",

          },
          {
            "name": "PersonRepository.java",
            "content": "import org.springframework.data.jpa.repository.JpaRepository;\n\npublic interface PersonRepository extends JpaRepository<Person, Long> {\n}",

          },

          {
            "name": "PersonJob.java",
            "content": "import lombok.Getter;\nimport lombok.Setter;\nimport javax.persistence.Entity;\nimport javax.persistence.GeneratedValue;\nimport javax.persistence.GenerationType;\nimport javax.persistence.Id;\nimport javax.persistence.ManyToOne;\n\n@Entity\n@Getter\n@Setter\npublic class PersonJob {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n\n    @ManyToOne\n    private Person person;\n\n    @ManyToOne\n    private Job job;\n}",

          },

          {
            "name": "PersonJobRepository.java",
            "content": "import org.springframework.data.jpa.repository.JpaRepository;\n\npublic interface PersonJobRepository extends JpaRepository<PersonJob, Long> {\n}"

        ]`
      },
      {
        role: 'user',
        content: prompt,
      },
    
  ],
    model: "gpt-3.5-turbo",
    temperature: 0.3

  });

  // console.log(completion);
  const jsonResp = JSON.parse(completion.choices[0].message.content);

  //return completion.choices[0].message.content;
  return jsonResp;

}
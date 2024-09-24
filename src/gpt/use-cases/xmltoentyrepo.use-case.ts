import OpenAI from 'openai';
import { jsonrepair } from 'jsonrepair'

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
      verificá que esté bien el json que me mandás, sin errores de 'json al inicio o al final, no quiero errores en el JSON.
        
         Ejemplo de salida:
        [
          {
            "name": "Job.java",
            "content": "package com.tuempresa.datarest;\nimport lombok.Getter;\nimport lombok.Setter;\nimport jakarta.persistence.Entity;\nimport jakarta.persistence.GeneratedValue;\nimport jakarta.persistence.GenerationType;\nimport jakarta.persistence.Id;\n\n@Entity\n@Getter\n@Setter\npublic class Job {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n    private String name;\n}",

          },
          {
            "name": "JobRepository.java",
            "content": "package com.tuempresa.datarest;\nimport org.springframework.data.repository.CrudRepository;\n\n import org.springframework.data.repository.PagingAndSortingRepository;\n\nimport org.springframework.data.rest.core.annotation.RepositoryRestResource;\n\n @RepositoryRestResource(collectionResourceRel = "job", path = "job")\n\npublic interface JobRepository extends PagingAndSortingRepository<Job, Long>,, CrudRepository<Job,Long> {\n}",

          },
          {
            "name": "Person.java",
            "content": "package com.tuempresa.datarest;\nimport lombok.Getter;\nimport lombok.Setter;\nimport jakarta.persistence.Entity;\nimport jakarta.persistence.GeneratedValue;\nimport jakarta.persistence.GenerationType;\nimport jakarta.persistence.Id;\n\n@Entity\n@Getter\n@Setter\npublic class Person {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n    private String name;\n}",

          },
          {
            "name": "PersonRepository.java",
            "content": "package com.tuempresa.datarest;\n\nimport org.springframework.data.repository.CrudRepository;\n\n import org.springframework.data.repository.PagingAndSortingRepository;\n\nimport org.springframework.data.rest.core.annotation.RepositoryRestResource;\n\n@RepositoryRestResource(collectionResourceRel = "person", path = "person")\n\npublic interface PersonRepository extends PagingAndSortingRepository<Person, Long>,, CrudRepository<Person,Long>",

          },

          {
            "name": "PersonJob.java",
            "content": "package com.tuempresa.datarest;\nimport lombok.Getter;\nimport lombok.Setter;\nimport jakarta.persistence.Entity;\nimport jakarta.persistence.GeneratedValue;\nimport jakarta.persistence.GenerationType;\nimport jakarta.persistence.Id;\nimport jakarta.persistence.ManyToOne;\n\n@Entity\n@Getter\n@Setter\npublic class PersonJob {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n\n    @ManyToOne\n    private Person person;\n\n    @ManyToOne\n    private Job job;\n}",

          },

          {
            "name": "PersonJobRepository.java",
            "content": "package com.tuempresa.datarest;\n\nimport org.springframework.data.repository.CrudRepository;\n\n import org.springframework.data.repository.PagingAndSortingRepository;\n\nimport org.springframework.data.rest.core.annotation.RepositoryRestResource;\n\n@RepositoryRestResource(collectionResourceRel = "personjob", path = "personjob")\n\npublic interface PersonJobRepository extends PagingAndSortingRepository<PersonJob, Long>, CrudRepository<PersonJob,Long>"

        ]`
      },
      {
        role: 'user',
        content: prompt,
      },
    
  ],
    model: "gpt-3.5-turbo",
    temperature: 0.5

  });

  // console.log(completion);
  const jsonResp = jsonrepair(completion.choices[0].message.content);

  //return completion.choices[0].message.content;
  return JSON.parse(jsonResp);

}
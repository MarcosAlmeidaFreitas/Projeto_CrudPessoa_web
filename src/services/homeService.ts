import api from '../config/axios';


export async function obterUsuarios(query: string, pageIndex: string){
  try {
    if(pageIndex === "" && query === ""){
      return await api.get("/getUsers");   
    }else if(pageIndex === "") {
      return await api.get(`/getUsers?query=${query}`);
    }else if(query === ""){
      return await api.get(`/getUsers?pageIndex=${pageIndex}`);
    }else{
      return await api.get(`/getUsers?query=${query}&pageIndex=${pageIndex}`);
    }
  } catch (error) {
    console.log(error)
  }
}

export async function obterQuantidadeUsuarios() {
  try {
    return await api.get("/getUsers");
  } catch(error){
    console.log(error)
  }
}

export async function deletarUser(id: number) {
  try {
    return await api.delete(`/persons/${id}`);
  } catch (error) {
    console.log(error)
  }
}


export async function baixarPdf(id : string) {
  fetch('http://localhost:3333/save/' + id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/pdf',
    },
  })
  .then((response) => response.blob())
  .then((blob) => {
    // Create blob link to download
    const url = window.URL.createObjectURL(
      new Blob([blob]),
    );
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute(
      'download',
      `pdf-${id}.pdf`,
    );

    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    link.parentNode?.removeChild(link);
  });
}
import React, { useState } from "react";

export default function Jobs() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="container mx-auto text-white mt-40">
        <div className="flex">
          <div className="basis-1/4">
            <div>
              <button onClick={() => setShow(!show)} className="text-2xl">
                account management
              </button>
            </div>
            <div>
              <button onClick={() => setShow(!show)} className="text-2xl mt-4">art & copy</button>
            </div>
            <div>
              <button onClick={() => setShow(!show)} className="text-2xl mt-4">design</button>
            </div>
            <div>
              <button onClick={() => setShow(!show)} className="text-2xl mt-4">experience design</button>
            </div>
            <div>
              <button onClick={() => setShow(!show)} className="text-2xl mt-4">production</button>
            </div>

            <div>
              <button onClick={() => setShow(!show)} className="text-2xl mt-4">studio</button>
            </div>
            <div>
              <button onClick={() => setShow(!show)} className="text-2xl mt-4">stratigy & analytics</button>
            </div>
            <div>
              <button onClick={() => setShow(!show)} className="text-2xl mt-4">
                social & community management
              </button>
            </div>
            <div>
              <button onClick={() => setShow(!show)} className="text-2xl mt-4">technology</button>
            </div>
            <div>
              <button onClick={() => setShow(!show)} className="text-2xl mt-4">talent & culture</button>
            </div>
          </div>

          <div className="basis-1/2 ml-40">
            <div className={show ? "visible" : "invisible"}>
              <h1 className="text-4xl">account management</h1>
              <p className="text-2xl mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                hic voluptatibus quidem recusandae reiciendis quasi id!
                Possimus, provident corporis itaque voluptatem, labore sequi
                debitis in nulla excepturi velit, similique dignissimos?
              </p>
            </div>
            <div className={show ? "visible" : "invisible"}>
              <h1 className="text-4xl">art & copy</h1>
              <p className="text-2xl mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                hic voluptatibus quidem recusandae reiciendis quasi id!
                Possimus, provident corporis itaque voluptatem, labore sequi
                debitis in nulla excepturi velit, similique dignissimos?
              </p>
            </div>
            <div className={show ? "visible" : "invisible"}>
              <h1 className="text-4xl">design</h1>
              <p className="text-2xl mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                hic voluptatibus quidem recusandae reiciendis quasi id!
                Possimus, provident corporis itaque voluptatem, labore sequi
                debitis in nulla excepturi velit, similique dignissimos?
              </p>
            </div>
            <div className={show ? "visible" : "invisible"}>
              <h1 className="text-4xl">experience design</h1>
              <p className="text-2xl mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                hic voluptatibus quidem recusandae reiciendis quasi id!
                Possimus, provident corporis itaque voluptatem, labore sequi
                debitis in nulla excepturi velit, similique dignissimos?
              </p>
            </div>
            <div className={show ? "visible" : "invisible"}>
              <h1 className="text-4xl">production</h1>
              <p className="text-2xl mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                hic voluptatibus quidem recusandae reiciendis quasi id!
                Possimus, provident corporis itaque voluptatem, labore sequi
                debitis in nulla excepturi velit, similique dignissimos?
              </p>
            </div>
            <div className={show ? "visible" : "invisible"}>
              <h1 className="text-4xl">studio</h1>
              <p className="text-2xl mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                hic voluptatibus quidem recusandae reiciendis quasi id!
                Possimus, provident corporis itaque voluptatem, labore sequi
                debitis in nulla excepturi velit, similique dignissimos?
              </p>
            </div>
            <div className={show ? "visible" : "invisible"}>
              <h1 className="text-4xl">stratigies & analytics</h1>
              <p className="text-2xl mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                hic voluptatibus quidem recusandae reiciendis quasi id!
                Possimus, provident corporis itaque voluptatem, labore sequi
                debitis in nulla excepturi velit, similique dignissimos?
              </p>
            </div>
            <div className={show ? "visible" : "invisible"}>
              <h1 className="text-4xl">social & community management</h1>
              <p className="text-2xl mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                hic voluptatibus quidem recusandae reiciendis quasi id!
                Possimus, provident corporis itaque voluptatem, labore sequi
                debitis in nulla excepturi velit, similique dignissimos?
              </p>
            </div>
            <div className={show ? "visible" : "invisible"}>
              <h1 className="text-4xl">technology</h1>
              <p className="text-2xl mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                hic voluptatibus quidem recusandae reiciendis quasi id!
                Possimus, provident corporis itaque voluptatem, labore sequi
                debitis in nulla excepturi velit, similique dignissimos?
              </p>
            </div>
            <div className={show ? "visible" : "invisible"}>
              <h1 className="text-4xl">talent & culture</h1>
              <p className="text-2xl mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                hic voluptatibus quidem recusandae reiciendis quasi id!
                Possimus, provident corporis itaque voluptatem, labore sequi
                debitis in nulla excepturi velit, similique dignissimos?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

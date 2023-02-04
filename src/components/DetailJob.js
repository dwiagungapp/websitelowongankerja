import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const DetailJob = () => {

    const {Id} = useParams()
    const [data, setData] = useState(null)

    useEffect(() => {
        if(Id !== undefined) {
         axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${Id}`)
            .then((res) => {
              setData(res.data)
            })
          }
  
      }, [])

      /* Fungsi formatRupiah */
		function formatRupiah(angka, prefix){
			var number_string = angka.replace(/[^,\d]/g, '').toString(),
			split   		= number_string.split(','),
			sisa     		= split[0].length % 3,
			rupiah     		= split[0].substr(0, sisa),
			ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);
 
			// tambahkan titik jika yang di input sudah menjadi angka ribuan
			if(ribuan){
				let separator = sisa ? '.' : '';
				rupiah += separator + ribuan.join('.');
			}
 
			rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
			return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
		}

      if (data === null){
        return <div className="justify-center flex flex-wrap mx-10 mb-10 py-8 gap-7"><div className="radial-progress" style={{"--value":70}}>70%</div></div>
      }

       return (
        <>
        <div className='justify-center flex flex-col lg:max-w-full'><img src='https://placeimg.com/1000/250/tech'/></div>
        <div className="justify-center flex flex-col flex-wrap mx-10 mb-10 py-8 gap-7">       
        <div className="bg-white lg:max-w-full shadow overflow-hidden sm:rounded-lg">
  <div className="px-4 py-5 sm:px-6">
  <img alt="Company Foto" src={data?.company_image_url} className="rounded-full h-10 w-10 " />
      <br/><h3 className="text-lg leading-6 font-medium text-gray-900">
      {data?.company_name}
    </h3>
    <p className="mt-1 max-w-2xl text-sm text-gray-500">
      {data?.company_city}
    </p>
    <p className="mt-1 max-w-2xl text-sm text-gray-500">
      {data?.created_at}
    </p>
    <br/><button type="button" className="justify-end py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">
    Lamar sekarang
</button>
  </div>
  <div className="border-t border-gray-200">
    <dl>
      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Nama pekerjaan
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {data?.title}
        </dd>
      </div>
      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Deskripsi pekerjaan
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {data?.job_description}
        </dd>
      </div>
      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Kualifikasi pekerjaan
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {data?.job_qualification}
        </dd>
      </div>
      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Status pekerjaan
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {data?.job_tenure}
        </dd>
      </div>
      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
        Gaji
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        {formatRupiah(data?.salary_min + "")}/Bulan
        </dd>
      </div>
    </dl>
  </div>
  
</div>

        </div>
        </>
       )
}

export default DetailJob

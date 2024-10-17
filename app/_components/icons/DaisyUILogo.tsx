import { ComponentPropsWithoutRef } from "react";

export const DaisyUILogo = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 256 250"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <g>
          <path
            d="M24.3577545,102.98035 L69.5431542,102.98035 C82.0207578,102.98035 92.1358541,113.095446 92.1358541,125.57305 C92.1358541,138.050653 82.0207578,148.16575 69.5431542,148.16575 L24.3577545,148.16575 C11.8801509,148.16575 1.76505468,138.050653 1.76505468,125.57305 C1.76505468,113.095446 11.8801509,102.98035 24.3577545,102.98035 Z"
            fill="#1AD1A5"
          ></path>
          <circle
            fill="#FFFFFF"
            cx="46.9504544"
            cy="46.9504544"
            r="45.1853997"
          ></circle>
          <path
            d="M46.9504544,0 C72.8804743,0 93.9009087,21.0204344 93.9009087,46.9504544 C93.9009087,72.8804743 72.8804743,93.9009087 46.9504544,93.9009087 C21.0204344,93.9009087 0,72.8804743 0,46.9504544 C0,21.0204344 21.0204344,0 46.9504544,0 Z M46.9504544,1.76505468 C21.9952472,1.76505468 1.76505468,21.9952472 1.76505468,46.9504544 C1.76505468,71.9056615 21.9952472,92.1358541 46.9504544,92.1358541 C71.9056615,92.1358541 92.1358541,71.9056615 92.1358541,46.9504544 C92.1358541,21.9952472 71.9056615,1.76505468 46.9504544,1.76505468 Z"
            fill-opacity="0.2"
            fill="#000000"
          ></path>
          <circle
            fill="#FF9903"
            cx="46.9504544"
            cy="46.9504544"
            r="20.2430591"
          ></circle>
        </g>
        <g transform="translate(143.6755, 32.8159)">
          <path
            d="M305.07911,80.4864932 C298.513107,80.4864932 292.864932,79.286256 288.134585,76.8857817 C283.404239,74.4853073 279.768226,71.0611012 277.226548,66.6131634 C274.755471,62.0946235 273.519933,56.7288573 273.519933,50.5158648 L293.11204,50.5158648 C293.11204,52.9869414 293.606255,55.105007 294.594686,56.8700616 C295.583116,58.6351163 296.959859,59.9765579 298.724913,60.8943863 C300.56057,61.8122147 302.749238,62.2711289 305.290917,62.2711289 C307.832596,62.2711289 310.021263,61.8122147 311.85692,60.8943863 C313.692577,59.9765579 315.06932,58.6351163 315.987148,56.8700616 C316.975579,55.105007 317.469794,52.9869414 317.469794,50.5158648 L337.061901,50.5158648 C337.061901,56.7288573 335.791062,62.0946235 333.249383,66.6131634 C330.707704,71.0611012 327.03639,74.4853073 322.235442,76.8857817 C317.505095,79.286256 311.786318,80.4864932 305.07911,80.4864932 Z M273.519933,50.5158648 L273.519933,5.08335746 L293.11204,5.08335746 L293.11204,50.5158648 L273.519933,50.5158648 Z M317.469794,50.5158648 L317.469794,5.08335746 L337.061901,5.08335746 L337.061901,50.5158648 L317.469794,50.5158648 Z M348.732443,79.2156538 L348.732443,5.08335746 L368.324549,5.08335746 L368.324549,79.2156538 L348.732443,79.2156538 Z"
            fill="#1AD1A5"
          ></path>
          <path
            d="M38.9724072,79.2156538 L38.0192777,69.3666487 L38.0192777,5.08335746 L57.0818682,5.08335746 L57.0818682,79.2156538 L38.9724072,79.2156538 Z M23.9341414,80.4864932 C18.9213861,80.4864932 14.6146527,79.3921593 11.0139412,77.2034915 C7.48383182,75.0148237 4.76564762,71.8377253 2.85938857,67.6721963 C0.953129525,63.5066672 0,58.529213 0,52.7398337 C0,46.9513154 0.930024213,42.0239306 2.79007264,37.9576793 L2.85938857,37.8074711 C4.76564762,33.6419421 7.48383182,30.4648437 11.0139412,28.2761759 C14.6146527,26.0875081 18.9213861,24.9931742 23.9341414,24.9931742 C28.311477,24.9931742 31.9121885,26.0875081 34.736276,28.2761759 C37.6309657,30.4648437 39.7490313,33.6419421 41.0904728,37.8074711 C42.5025166,41.902398 43.2085385,46.8798522 43.2085385,52.7398337 C43.2085385,58.529213 42.5025166,63.5066672 41.0904728,67.6721963 C39.7660116,71.7849971 37.6844632,74.9342325 34.8458276,77.1199024 L34.736276,77.2034915 C31.9121885,79.3921593 28.311477,80.4864932 23.9341414,80.4864932 Z M29.0174989,62.9065486 C30.7825535,62.9065486 32.3358017,62.4829355 33.6772432,61.6357093 C35.0892869,60.7178808 36.1836208,59.5176437 36.9602449,58.0349977 C37.736869,56.4817496 38.125181,54.7166949 38.125181,52.7398337 C38.125181,50.7629725 37.736869,49.0332189 36.9602449,47.550573 C36.1836208,45.9973248 35.0892869,44.7970877 33.6772432,43.9498614 C32.3358017,43.1026352 30.7472524,42.679022 28.9115956,42.679022 C27.2171431,42.679022 25.6991961,43.1026352 24.3577545,43.9498614 C23.016313,44.7970877 21.9572802,45.9973248 21.1806561,47.550573 C20.404032,49.0332189 19.9804189,50.7629725 19.9098167,52.7398337 C19.9804189,54.7166949 20.404032,56.4817496 21.1806561,58.0349977 C21.9572802,59.5176437 23.016313,60.7178808 24.3577545,61.6357093 C25.7697983,62.4829355 27.3230464,62.9065486 29.0174989,62.9065486 Z M97.4857348,79.2156538 L96.9562184,67.0367766 L96.9562184,53.2693501 C96.9562184,50.7982736 96.815014,48.5743047 96.5326052,46.5974434 C96.2501965,44.6205822 95.5441746,43.0673341 94.4145396,41.9376991 C93.2849046,40.8080641 91.4492478,40.2432466 88.9075691,40.2432466 C87.1425144,40.2432466 85.6951695,40.6668597 84.5655345,41.514086 C83.4358996,42.3613122 82.48277,43.3497428 81.706146,44.4793778 L65.0793309,39.1842138 C66.5619769,36.2895241 68.3976337,33.7831465 70.5863015,31.6650809 C72.8455715,29.5470153 75.4578524,27.923165 78.4231443,26.79353 C81.4590383,25.5932928 84.8126422,24.9931742 88.4839559,24.9931742 C94.1321309,24.9931742 98.9683807,26.0169059 102.992705,28.0643693 C107.01703,30.1118328 110.088225,32.9712213 112.206291,36.6425351 C114.324356,40.3138488 115.383389,44.5852811 115.383389,49.456832 L115.383389,79.2156538 L97.4857348,79.2156538 Z M83.4005985,80.4864932 C77.2582082,80.4864932 72.4572595,79.1097505 68.9977523,76.3562653 C65.6088473,73.5321778 63.9143948,69.5078531 63.9143948,64.2832913 C63.9143948,58.7763207 65.6088473,54.7166949 68.9977523,52.104414 C72.4572595,49.4215309 77.2582082,48.0800894 83.4005985,48.0800894 L98.9683807,48.0800894 L98.9683807,58.9881272 L90.9197314,58.9881272 C88.4486548,58.9881272 86.5423958,59.4117404 85.2009542,60.2589666 C83.8595127,61.1061929 83.1887919,62.30643 83.1887919,63.8596782 C83.1887919,64.918711 83.6477061,65.7306361 84.5655345,66.2954536 C85.483363,66.8602711 86.7542023,67.1426798 88.3780526,67.1426798 C90.1431073,67.1426798 91.6610543,66.82497 92.9318937,66.1895503 C94.2027331,65.4835285 95.1911637,64.5303989 95.8971856,63.3301618 C96.6032074,62.0593224 96.9562184,60.6119776 96.9562184,58.9881272 L101.933673,58.9881272 C101.933673,65.8365394 100.309822,71.1317034 97.0621217,74.8736193 C93.814421,78.6155352 89.26058,80.4864932 83.4005985,80.4864932 Z M125.433611,79.2156538 L125.433611,26.2640136 L144.496201,26.2640136 L144.496201,79.2156538 L125.433611,79.2156538 Z M134.964906,21.1806561 C132.140818,21.1806561 129.669742,20.1216233 127.551676,18.0035577 C125.433611,15.8854921 124.374578,13.4144155 124.374578,10.5903281 C124.374578,7.69563838 125.433611,5.22456184 127.551676,3.17709842 C129.669742,1.05903281 132.140818,0 134.964906,0 C137.859595,0 140.330672,1.05903281 142.378135,3.17709842 C144.496201,5.22456184 145.555234,7.69563838 145.555234,10.5903281 C145.555234,13.4144155 144.496201,15.8854921 142.378135,18.0035577 C140.330672,20.1216233 137.859595,21.1806561 134.964906,21.1806561 Z M175.105779,80.4864932 C171.57567,80.4864932 168.292668,79.9922779 165.256774,79.0038473 C162.22088,78.0154166 159.608599,76.638674 157.419931,74.8736193 C155.301866,73.0379625 153.81922,70.8492947 152.971994,68.3076159 L168.116163,62.3770322 C168.892787,64.2832913 169.987121,65.5188295 171.399164,66.083647 C172.811208,66.5778624 174.046746,66.82497 175.105779,66.82497 C176.235414,66.82497 177.153243,66.5778624 177.859264,66.083647 C178.565286,65.5894317 178.918297,64.8834099 178.918297,63.9655814 C178.918297,62.9771508 178.424082,62.1652257 177.435651,61.529806 C176.468708,60.8391324 174.995021,60.2498077 173.01459,59.7618318 L168.539776,58.6704174 C163.809429,57.4701802 160.244019,55.3874157 157.843544,52.4221239 C155.44307,49.456832 154.242833,45.9973248 154.242833,42.0436024 C154.242833,36.607234 156.219694,32.4064038 160.173417,29.441112 C164.197741,26.4758201 169.63411,24.9931742 176.482522,24.9931742 C180.648051,24.9931742 184.142859,25.5226906 186.966947,26.5817234 C189.861636,27.570154 192.22681,28.9821978 194.062466,30.8178546 C195.898123,32.6535115 197.310167,34.7715771 198.298598,37.1720515 L183.578042,42.7849253 C183.083826,41.3728816 182.2366,40.3491499 181.036363,39.7137302 C179.906728,39.0783105 178.494684,38.7606007 176.800232,38.7606007 C175.599994,38.7606007 174.646865,39.0430094 173.940843,39.6078269 C173.305423,40.1726444 172.987714,40.8433652 172.987714,41.6199892 C172.987714,42.4672155 173.481929,43.2085385 174.470359,43.8439581 L174.611497,43.91763 C175.668528,44.4578902 177.210031,44.9981504 179.236007,45.5384106 L183.578042,46.5974434 C186.825742,47.3740675 189.64983,48.5743047 192.050304,50.198155 C194.450778,51.7514031 196.321736,53.6929632 197.663178,56.0228354 C199.004619,58.3527076 199.67534,61.0355907 199.67534,64.0714847 C199.67534,67.5309919 198.651609,70.4962837 196.604145,72.9673603 C194.556682,75.3678346 191.697293,77.2387926 188.025979,78.5802341 C184.354666,79.8510735 180.047932,80.4864932 175.105779,80.4864932 Z M223.102911,101.667149 C220.631834,101.667149 218.019553,101.172934 215.266068,100.184503 C212.512583,99.2666749 210.323915,98.2782443 208.700065,97.2192115 L215.795585,81.8632358 C216.572209,82.4986555 217.384134,82.9928708 218.23136,83.3458818 C219.149188,83.7694949 219.996415,83.9813015 220.773039,83.9813015 C221.902674,83.9813015 222.961707,83.6988927 223.950137,83.1340752 C224.983955,82.5827057 225.782292,81.6612952 226.345148,80.3698435 L232.740109,65.4482274 L247.037052,26.2640136 L268.217708,26.2640136 L245.448503,81.1219129 C243.824653,85.0756354 242.1302,88.6057447 240.365146,91.7122409 C238.630007,94.7660847 236.451379,97.1717513 233.829261,98.9292407 L233.693239,99.0195673 C231.080958,100.784622 227.550849,101.667149 223.102911,101.667149 Z M227.762655,79.2156538 L202.345868,26.2640136 L223.526524,26.2640136 L239.306113,65.4482274 L245.766213,79.2156538 L227.762655,79.2156538 Z"
            fill="#000000"
          ></path>
        </g>
      </g>
    </svg>
  );
};

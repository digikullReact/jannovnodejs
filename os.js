const os=require("os");

//console.log(os.arch());
//console.log(os.cpus());
var free_memory = os.freemem();
console.log(free_memory)  // bytes 
var free_mem_in_kb = free_memory/1024;
console.log(free_mem_in_kb)
var free_mem_in_mb = free_mem_in_kb/1024;
console.log(free_mem_in_mb)
var free_mem_in_gb = free_mem_in_mb/1024;
   
free_mem_in_kb = Math.floor(free_mem_in_kb);
free_mem_in_mb = Math.floor(free_mem_in_mb);
free_mem_in_gb = Math.floor(free_mem_in_gb);

console.log(free_mem_in_gb)
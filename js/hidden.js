document.getElementById('donaton-btn').addEventListener('click', function(){
    getHiddinAllFuntion('section-1');
    document.getElementById("donaton-btn").classList.add("bg-[#B4F461]");
    document.getElementById("history_btn").classList.remove("bg-[#B4F461]");
})
document.getElementById('history_btn').addEventListener('click', function(){
    getHiddinAllFuntion('section-02');
    document.getElementById("history_btn").classList.add("bg-[#B4F461]");
    document.getElementById("donaton-btn").classList.remove("bg-[#B4F461]");
})

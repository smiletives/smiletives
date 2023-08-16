function plotResult() {
    const s = parseFloat(document.getElementById('s').value);
    const x = parseFloat(document.getElementById('x').value);
    const r = parseFloat(document.getElementById('r').value);
    const sigma = parseFloat(document.getElementById('sigma').value);
    const T = parseFloat(document.getElementById('T').value);
    const q = parseFloat(document.getElementById('q').value);

    const n = 2;
    const deltaT = T / n;
    const u = Math.exp(sigma * Math.sqrt(deltaT));
    const d = 1 / u;
    const a = Math.exp((r - q) * deltaT);
    const p = (a - d) / (u - d);
    const p2 = p.toFixed(2);

    const su = (s * u).toFixed(2);
    const suu = (s * u * u).toFixed(2);
    const sd = (s * d).toFixed(2);
    const sdd = (s * d * d).toFixed(2);
    const sud = s;
    const c_suu = Math.max(suu - x, 0).toFixed(2);
    const c_s = Math.max(s - x, 0).toFixed(2);
    const c_sdd = Math.max(sdd - x, 0).toFixed(2);
    
    // ... (The rest of your code to calculate and plot the result) ...
}

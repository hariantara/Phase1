function tic_tac_toe_board ()
{
  // ...
  let board = [];
  let tambah = [];
  let x = 0;
  let o = 0;

//console.log(test);
  for(let i=0; i<3; i++)
  {
    for(let x=0; x<3; x++)
    {
      if(Math.floor(Math.random()*2) == 1 && x <=5)
      {
        tambah.push("X");
        x += 1;
      }
      else if (o <= 5)
      {
        tambah.push("O");
        o += 1;
      }
    }
  }
  return tambah;
  // for(let j=0; j<3; j++)
  // {
  //   board.push(tambah.slice(1,4));
  //   console.log(board);
  //
  // }
}

console.log(tic_tac_toe_board()) // => make a random tic tic board

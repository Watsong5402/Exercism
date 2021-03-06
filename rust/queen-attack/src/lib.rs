#[derive(Debug)]
pub struct ChessPosition {
    rank: i32,
    file: i32,
}

#[derive(Debug)]
pub struct Queen {
    position: ChessPosition,
}

impl ChessPosition {
    pub fn new(rank: i32, file: i32) -> Option<Self> {
        match (rank, file) {
            (0..=7, 0..=7) => Some(Self {
                rank: rank,
                file: file,
            }),
            _ => None,
        }
    }
}

impl Queen {
    pub fn new(position: ChessPosition) -> Self {
        Self { position: position }
    }

    pub fn can_attack(&self, other: &Queen) -> bool {
        let dx = self.position.rank - other.position.rank;
        let dy = self.position.file - other.position.file;
        dx == 0 || dy == 0 || dx.abs() == dy.abs()
    }
}

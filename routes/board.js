const express = require('express');
const router = express.Router();

// 게시글 데이터 불러오기
let boards = require('../models/boardModel');

router.get('/', (req, res) => {
    try {
        res.status(200).json({ message: '전체 게시물 가져오기', boards })
    } catch (error) {
        res.status(500).json({ message: "서버오류", error })
    }
})
// 1개 데이터 가져오기
router.get('/:id', (req, res) => {
    try {
        const boardId = Number(req.params.id)
        const board = boards.find(item => item.id === boardId)

        if (!board) {
            return res.status(404).json({ message: '게시물을 찾을수 없음' })

        }
        return res.status(200).json({
            message: '1개 게시물 가져오기',
            board
        })
    } catch (error) {
        res.status(500).json({ message: "서버오류", error })
    }
})


// 데이터 추가하기
router.post('/', (req, res) => {
    try {
        const { title, content } = req.body

        if (!title || !content) {
            return res.status(400).json({ message: '제목과 내용을 모두 입력하세요' })
        }

        const newBoard = {
            id: Date.now(),
            title,
            content
        }
        boards.push(newBoard)
        res.status(200).json({ message: '게시물 등록 성공', boards })
    } catch (error) {
        res.status(500).json({ message: "서버오류", error })
    }
})

router.delete('/:id', (req, res) => {
    try {
        const boardId = Number(req.params.id)
        const index = boards.find(item => item.id === boardId)

        if (index) {
            return res.status(404).json({ message: '게시물을 찾을수 없음' })

        }
        boards.splice(index, 1)
        return res.status(200).json({
            message: '1개 게시물 삭제하기완료',
            boards
        })
    } catch (error) {
        res.status(500).json({ message: "서버오류", error })
    }
})
// 1개 데이터 삭제하기
router.delete('/:id', (req, res) => {
    try {
        const boardId = Number(req.params.id)
        const index = boards.findIndex(item => item.id === boardId)

        if (index === -1) {
            return res.status(404).json({ message: '게시물을 찾을수 없음' })
        }

        boards.splice(index, 1)
        res.status(200).json({
            message: '1개 게시물 삭제하기 완료',
            boards
        })
    } catch (error) {
        res.status(500).json({ message: "서버오류", error })
    }
})





module.exports = router
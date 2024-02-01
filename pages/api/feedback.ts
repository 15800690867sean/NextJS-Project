export default function handler(req: unknown, res: any) {
    res.status(200).json({
        message: 'this works',
    });
};
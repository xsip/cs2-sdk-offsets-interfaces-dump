#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animationsystem_CSeqCmdLayer {
    int16_t m_cmd;
    int16_t m_nLocalReference;
    int16_t m_nLocalBonemask;
    int16_t m_nDstResult;
    int16_t m_nSrcResult;
    bool m_bSpline;
    char pad_436[0x1];
    float32 m_flVar1;
    float32 m_flVar2;
    int16_t m_nLineNumber;
    char end_pad_437[0x2];
};

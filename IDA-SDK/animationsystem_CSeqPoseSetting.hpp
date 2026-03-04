#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animationsystem_CSeqPoseSetting {
    CBufferString m_sPoseParameter;
    CBufferString m_sAttachment;
    CBufferString m_sReferenceSequence;
    float32 m_flValue;
    bool m_bX;
    bool m_bY;
    bool m_bZ;
    char pad_449[0x1];
    int32_t m_eType;
    char end_pad_450[0x4];
};

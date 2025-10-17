#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animationsystem_CSeqPoseParamDesc {
    CBufferString m_sName;
    float32 m_flStart;
    float32 m_flEnd;
    float32 m_flLoop;
    bool m_bLooping;
    char end_pad_442[0x3];
};

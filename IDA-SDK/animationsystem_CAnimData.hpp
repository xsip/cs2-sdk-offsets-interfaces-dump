#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animationsystem_CAnimData {
    char vTable418[0x10];
    CBufferString m_name;
    char m_animArray[0x18];
    char m_decoderArray[0x18];
    int32_t m_nMaxUniqueFrameIndex;
    char pad_419[0x4];
    char m_segmentArray[0x18];
};

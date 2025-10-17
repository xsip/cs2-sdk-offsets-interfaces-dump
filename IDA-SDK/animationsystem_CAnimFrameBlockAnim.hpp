#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animationsystem_CAnimFrameBlockAnim {
    int32_t m_nStartFrame;
    int32_t m_nEndFrame;
    char m_segmentIndexArray[0x18];
};

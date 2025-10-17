#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animationsystem_CAnimFrameSegment {
    int32_t m_nUniqueFrameIndex;
    uint32_t m_nLocalElementMasks;
    int32_t m_nLocalChannel;
    char pad_423[0x4];
    CUtlBinaryBlock m_container;
};

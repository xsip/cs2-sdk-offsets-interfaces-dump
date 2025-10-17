#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_CAnimAttachment {
    Quaternion m_influenceRotations[3];
    VectorAligned m_influenceOffsets[3];
    int32_t m_influenceIndices[3];
    float32 m_influenceWeights[3];
    uint8_t m_numInfluences;
    char end_pad_309[0x7];
};

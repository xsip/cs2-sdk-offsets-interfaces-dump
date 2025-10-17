#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animgraphlib_CAnimAttachment {
    Quaternion m_influenceRotations[3];
    VectorAligned m_influenceOffsets[3];
    int32_t m_influenceIndices[3];
    float32 m_influenceWeights[3];
    uint8_t m_numInfluences;
    char pad_3[0x7];
};

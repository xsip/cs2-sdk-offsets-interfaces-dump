#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_CAttachment {
    CUtlString m_name;
    CUtlString m_influenceNames[3];
    Quaternion m_vInfluenceRotations[3];
    Vector m_vInfluenceOffsets[3];
    float32 m_influenceWeights[3];
    bool m_bInfluenceRootTransform[3];
    uint8_t m_nInfluences;
    bool m_bIgnoreRotation;
    char end_pad_311[0xb];
};

#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class animgraphlib_FootFixedData_t {
    VectorAligned m_vToeOffset;
    VectorAligned m_vHeelOffset;
    int32_t m_nTargetBoneIndex;
    int32_t m_nAnkleBoneIndex;
    int32_t m_nIKAnchorBoneIndex;
    int32_t m_ikChainIndex;
    float32 m_flMaxIKLength;
    int32_t m_nFootIndex;
    int32_t m_nTagIndex;
    float32 m_flMaxRotationLeft;
    float32 m_flMaxRotationRight;
    char end_pad_259[0xc];
};

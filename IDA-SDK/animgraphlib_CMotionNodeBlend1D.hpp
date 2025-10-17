#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_AnimNodeID.hpp"

class animgraphlib_CMotionNodeBlend1D {
    char vTable187[0x18];
    CUtlString m_name;
    modellib_AnimNodeID m_id;
    char end_pad_188[0x4];
    char m_blendItems[0x18];
    int32_t m_nParamIndex;
    char end_pad_189[0x4];
};

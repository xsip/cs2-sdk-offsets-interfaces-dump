#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "modellib_AnimNodeID.hpp"

class animgraphlib_CMotionNode {
    char vTable187[0x18];
    CUtlString m_name;
    modellib_AnimNodeID m_id;
    char end_pad_188[0x4];
};

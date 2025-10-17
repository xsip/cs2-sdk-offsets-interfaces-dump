#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_CConstraintSlave {
    Quaternion m_qBaseOrientation;
    Vector m_vBasePosition;
    uint32_t m_nBoneHash;
    float32 m_flWeight;
    char pad_317[0x4];
    CUtlString m_sName;
    char end_pad_318[0x20];
};

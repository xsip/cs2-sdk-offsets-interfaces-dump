#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_CConstraintTarget {
    char vTable319[0x20];
    Quaternion m_qOffset;
    Vector m_vOffset;
    uint32_t m_nBoneHash;
    CUtlString m_sName;
    float32 m_flWeight;
    char pad_320[0xd];
    bool m_bIsAttachment;
    char end_pad_321[0x6];
};

#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_CConstraintTarget {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    void **__vftable_3;
    Quaternion m_qOffset;
    Vector m_vOffset;
    uint32_t m_nBoneHash;
    CUtlString m_sName;
    float32 m_flWeight;
    char pad_322[0xd];
    bool m_bIsAttachment;
    char end_pad_323[0x6];
};

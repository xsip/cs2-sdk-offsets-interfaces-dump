#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_Bone_t {
    CUtlString m_Name;
    char pad_389[0x8];
    CTransform m_BindPose;
    int32_t m_nParent;
    char end_pad_390[0xc];
};

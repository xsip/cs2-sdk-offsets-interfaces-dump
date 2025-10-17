#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_ModelBoneFlexDriver_t {
    CUtlString m_boneName;
    uint32_t m_boneNameToken;
    char pad_378[0x4];
    char m_controls[0x18];
};

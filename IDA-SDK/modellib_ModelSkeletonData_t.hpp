#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_ModelSkeletonData_t {
    char m_boneName[0x18];
    char m_nParent[0x18];
    char m_boneSphere[0x18];
    char m_nFlag[0x18];
    char m_bonePosParent[0x18];
    char m_boneRotParent[0x18];
    char m_boneScaleParent[0x18];
};

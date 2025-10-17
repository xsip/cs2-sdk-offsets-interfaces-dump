#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_CAnimSkeleton {
    char vTable310[0x10];
    char m_localSpaceTransforms[0x18];
    char m_modelSpaceTransforms[0x18];
    char m_boneNames[0x18];
    char m_children[0x18];
    char m_parents[0x18];
    char m_feet[0x18];
    char m_morphNames[0x18];
    char m_lodBoneCounts[0x18];
};

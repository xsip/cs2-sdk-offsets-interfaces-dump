#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "animlib_CNmBoneWeightList.hpp"

class animlib_NmBoneMaskSetDefinition_t {
    CGlobalSymbol m_ID;
    animlib_CNmBoneWeightList m_primaryWeightList;
    char m_secondaryWeightLists[0x10];
};

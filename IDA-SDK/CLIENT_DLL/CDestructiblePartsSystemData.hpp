#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "CRangeInt.hpp"

class CDestructiblePartsSystemData {
    char m_PartsDataByHitGroup[0x28];
    CRangeInt m_nMinMaxNumberHitGroupsToDestroyWhenGibbing;
};

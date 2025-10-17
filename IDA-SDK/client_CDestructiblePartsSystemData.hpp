#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

#include "tier2_CRangeInt.hpp"

class client_CDestructiblePartsSystemData {
    char m_PartsDataByHitGroup[0x28];
    tier2_CRangeInt m_nMinMaxNumberHitGroupsToDestroyWhenGibbing;
};

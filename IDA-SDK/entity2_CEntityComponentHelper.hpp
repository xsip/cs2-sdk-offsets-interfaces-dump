#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class entity2_EntComponentInfo_t;
class entity2_CEntityComponentHelper;

class entity2_CEntityComponentHelper {
    char vTable2503[0x8];
    uint32_t m_flags;
    char pad_2504[0x4];
    entity2_EntComponentInfo_t* m_pInfo;
    int32_t m_nPriority;
    char pad_2505[0x4];
    entity2_CEntityComponentHelper* m_pNext;
};

#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class entity2_CEntityAttributeTable;
class entity2_CEntityIdentity;
#include "networksystem_ChangeAccessorFieldPathIndex_t.hpp"

class server_CEntityIdentity {
    void **__vftable_0;
    void **__vftable_1;
    char __vftable_pad[4];
    int32_t m_nameStringableIndex;
    CUtlSymbolLarge m_name;
    CUtlSymbolLarge m_designerName;
    char pad_2810[0x8];
    uint32_t m_flags;
    char pad_2811[0x4];
    WorldGroupId_t m_worldGroupId;
    uint32_t m_fDataObjectTypes;
    networksystem_ChangeAccessorFieldPathIndex_t m_PathIndex;
    char pad_2812[0x4];
    entity2_CEntityAttributeTable* m_pAttributes;
    entity2_CEntityIdentity* m_pPrev;
    entity2_CEntityIdentity* m_pNext;
    entity2_CEntityIdentity* m_pPrevByClass;
    entity2_CEntityIdentity* m_pNextByClass;
};

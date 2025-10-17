#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class entity2_CEntityComponentHelper;

class entity2_EntComponentInfo_t {
    char* m_pName;
    char* m_pCPPClassname;
    char* m_pNetworkDataReferencedDescription;
    char* m_pNetworkDataReferencedPtrPropDescription;
    int32_t m_nRuntimeIndex;
    uint32_t m_nFlags;
    char pad_2515[0x38];
    entity2_CEntityComponentHelper* m_pBaseClassComponentHelper;
};

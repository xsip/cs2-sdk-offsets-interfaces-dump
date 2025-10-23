#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class compositematerialslib_CompositeMaterialInputContainer_t {
    bool m_bEnabled;
    char pad_2617[0x3];
    compositematerialslib_CompositeMaterialInputContainerSourceType_t m_nCompositeMaterialInputContainerSourceType;
    char m_strSpecificContainerMaterial[0xe0];
    CUtlString m_strAttrName;
    CUtlString m_strAlias;
    char m_vecLooseVariables[0x18];
    CUtlString m_strAttrNameForVar;
    bool m_bExposeExternally;
    char end_pad_2618[0x1f];
};

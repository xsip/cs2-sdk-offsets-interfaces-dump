#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class compositematerialslib_CompositeMaterialMatchFilter_t {
    compositematerialslib_CompositeMaterialMatchFilterType_t m_nCompositeMaterialMatchFilterType;
    char pad_2626[0x4];
    CUtlString m_strMatchFilter;
    CUtlString m_strMatchValue;
    bool m_bPassWhenTrue;
    char end_pad_2627[0x7];
};

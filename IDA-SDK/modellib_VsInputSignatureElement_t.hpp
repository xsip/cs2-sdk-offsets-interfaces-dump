#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class modellib_VsInputSignatureElement_t {
    char m_pName[64];
    char m_pSemantic[64];
    char m_pD3DSemanticName[64];
    int32_t m_nD3DSemanticIndex;
};

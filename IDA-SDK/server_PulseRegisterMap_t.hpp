#pragma once
#include "enums.hpp"
#include "typedefs.hpp"


class server_PulseRegisterMap_t {
    KeyValues3 m_Inparams;
    CKV3MemberNameSet m_InparamsWhichCanBeMoved;
    KeyValues3 m_Outparams;
};

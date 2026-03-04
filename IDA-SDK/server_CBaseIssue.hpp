#pragma once
#include "enums.hpp"
#include "typedefs.hpp"

class server_CVoteController;

class server_CBaseIssue {
    void **__vftable_0;
    void **__vftable_1;
    void **__vftable_2;
    void **__vftable_3;
    char m_szTypeString[64];
    char m_szDetailsString[260];
    int32_t m_iNumYesVotes;
    int32_t m_iNumNoVotes;
    int32_t m_iNumPotentialVotes;
    server_CVoteController* m_pVoteController;
};

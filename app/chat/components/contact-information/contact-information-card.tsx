import { Button } from '~/components/ui/button'
import ContactInformationSkeleton from './contact-information-skeleton'
import ContactInformation from './contact-information'
import NoContactSelected from './no-contact-selected'
import { useLoaderData, useNavigation, useParams } from 'react-router'
import type { Client } from '~/chat/interfaces/chat.interface'

interface Props{
  client?: Client;
}

const ContactInformationCard = ({ client }:Props) => {

  const { id } = useParams();
  const { clients = [] } = useLoaderData();
  const { state } = useNavigation();

  const isPending = state === 'loading';
 
  //console.log({id  , clients , isPending});
  if(client) return  <ContactInformation client={client}/>
  if(isPending) return <ContactInformationSkeleton/>;
  if(!id) return <NoContactSelected/>;
  if(!client) return <NoContactSelected/>
   
  return  <ContactInformation client={client}/>
}

export default ContactInformationCard
